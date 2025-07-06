// Example usage of the Global Toast Context
import { useToast } from '@/contexts/ToastContext'

// In any component (no need to render ToastContainer):
export function ExampleComponent() {
  const { showToast } = useToast()

  const handleSuccess = () => {
    showToast({
      title: 'Success!',
      description: 'Your rating was saved successfully.',
      duration: 3000,
      type: 'success',
    })
  }

  const handleError = () => {
    showToast({
      title: 'Error!',
      description: 'Something went wrong. Please try again.',
      duration: 5000,
      type: 'error',
    })
  }

  const handleInfo = () => {
    showToast({
      title: 'Info',
      description: 'This is an informational message.',
      duration: 4000,
      type: 'info',
    })
  }

  return (
    <div>
      <button onClick={handleSuccess}>Show Success Toast</button>
      <button onClick={handleError}>Show Error Toast</button>
      <button onClick={handleInfo}>Show Info Toast</button>

      {/* No need to render ToastContainer - it's global! */}
    </div>
  )
}

// Usage in RatingsSection:
// import { useToast } from '@/contexts/ToastContext'
//
// export function RatingsSection({ ratings, bookId }: RatingsSectionProps) {
//   const { showToast } = useToast()
//
//   const onSubmit = async (data: RatingFormData) => {
//     try {
//       // ... lógica existente
//       showToast({
//         title: 'Success!',
//         description: 'Rating saved successfully.',
//         type: 'success',
//       })
//     } catch (error) {
//       showToast({
//         title: 'Error!',
//         description: 'Failed to save rating.',
//         type: 'error',
//       })
//     }
//   }
// }
