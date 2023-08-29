export const uploadFile = async (file: File) => {
  try {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
    
    return await response.json()
  } catch (err: any) {
    throw err
  }
}
