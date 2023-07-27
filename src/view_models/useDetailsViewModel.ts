import { useState } from 'react'

interface IUseDetailsViewModel {
  isLoadingWebView: boolean
  setIsLoadingWebView: (stats: boolean) => void
}

export default function useDetailsViewModel(): IUseDetailsViewModel {
  const [isLoadingWebView, setIsLoadingWebView] = useState(true)

  return {
    isLoadingWebView,
    setIsLoadingWebView,
  }
}
