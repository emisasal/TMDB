import Swal from 'sweetalert2'

export const alertLogin = () => {
    let timerInterval
    return Swal.fire({
        title: 'Successfully Logged In',
        timer: 1500,
        didOpen: () => {
          Swal.showLoading()
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      })
}