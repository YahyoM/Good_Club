import {toast} from 'react-hot-toast'



const toastError = (message, toastId) => {
  return toast.error(message, {
    duration: 1500,
    position: "top-center",
    id: toastId
  });
};

const toastSuccess = (message, toastId) => {
  return toast.success(message, {
    duration: 1500,
    position: "top-center",
    id: toastId
  });
};

const toastLoading = (message) => {
  return toast.loading(message);
}

const toastDismiss = (toastId) => {
  return toast.dismiss(toastId);
}

  
export { toastError, toastSuccess, toastLoading, toastDismiss };