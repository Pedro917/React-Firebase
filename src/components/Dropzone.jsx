import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

import '../assets/css/components/dropzone.css'


const Dropzone = ({onFileUploaded, image, accept}) => {

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    onFileUploaded(file);
    image(fileUrl);

    console.log(file)

  }, [onFileUploaded, image])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept={accept}/>
      <p>Arraste e solte alguns arquivos aqui ou clique para selecionar arquivos</p>
    </div>
  )
}

export default Dropzone