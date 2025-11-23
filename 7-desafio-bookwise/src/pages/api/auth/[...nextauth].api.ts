import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github'
import { prisma } from '@/lib/prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          scope:
            'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
        },
      },
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.name,
          username: '',
          email: profile.email,
          avatar_url: profile.picture,
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          scope: 'read:user user:email',
        },
      },
      profile(profile: GithubProfile) {
        return {
          id: profile.id.toString(),
          name: profile.name || '',
          username: profile.login || '',
          email: profile.email || '',
          avatar_url: profile.avatar_url || '',
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ account, ...props }) {
      if (account?.provider === 'google') {
        const requiredScopes = [
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile',
        ]

        if (!requiredScopes.every((scope) => account?.scope?.includes(scope))) {
          return '/auth/signin?error=permissions'
        }
      }

      if (account?.provider === 'github') {
        const requiredScopes = ['read:user', 'user:email']
        const accountScopes = account?.scope ? account.scope.split(/[ ,]+/) : []
        if (!requiredScopes.every((scope) => accountScopes.includes(scope))) {
          return '/auth/signin?error=permissions'
        }
      }

      return true
    },
    async session({ session, user }) {
      return {
        ...session,
        user,
      }
    },
  },
}
export default NextAuth(authOptions)
