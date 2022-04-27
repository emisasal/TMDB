import Swal from 'sweetalert2'

export const alertLogin = () => {
    let timerInterval
    return Swal.fire({
        title: 'Successfully Logged In!',
        timer: 1000,
        didOpen: () => {
          Swal.showLoading()
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      })
}

export const alertRegister = () => {
  let timerInterval
  return Swal.fire({
      title: 'Successfully Registered!',
      timer: 1000,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })
}

export const alertLogout = () => {
  let timerInterval
  return Swal.fire({
      title: 'Successfully Logged out',
      timer: 1000,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })
}