import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { useContext } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no minimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
  owner: zod.string().optional(),
})

// definido manualmentee
// jeito 1
// interface NewCycleFormData {
//   task: string
//   minutesAmount: number
// }

// automatizando a tipagem
// jeito 2
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  // forma antiga como era feito, antes de usar o Form.Provider
  // const {
  //   // definir campos do formulario
  //   register,
  //   // enviar formulario
  //   handleSubmit,
  //   // pegar o valor dos inputs definidos com o register
  //   watch,
  //   // capturar o erros do formulário
  //   formState,
  //   // função para resetar o fomulário depois de enviado
  //   reset,
  // } = useForm<NewCycleFormData>({
  //   resolver: zodResolver(newCycleFormValidationSchema),
  //   // inicio o formulario com esses valores
  //   // deixa esses valores na hora de usar a função reset
  //   defaultValues: {
  //     task: '',
  //     minutesAmount: 0,
  //   },
  // })

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    // inicio o formulario com esses valores
    // deixa esses valores na hora de usar a função reset
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  // testando a captura de erro com zod + useForm
  // console.log(formState.errors)

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  // propriedade watch, transform umas das variveis do componente em controlled e faz a reenderização toda vez que o valor da variavel mudar
  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisable} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
