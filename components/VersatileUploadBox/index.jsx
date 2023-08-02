import PictureBox from '../PictureBox'
import UploadBox from '../UploadBox'
import { useState } from 'react'
import { DragFileElement } from './styles'


const VersatileUploadBox = ({fetchData, picture, setPicture, setFile}) => {
    const handleFileSelected = (file) => {
        const pictureUrl = URL.createObjectURL(file)
        setFile(file)
        setPicture(pictureUrl)
    }

    const [dragActive, setDragActive] = useState(false)
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation()
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelected(e.dataTransfer.files[0]) 
        }
    }

    return (
        <>
            {picture && (<PictureBox 
                onClick={fetchData} 
                picture={picture}
                handleDrag={handleDrag}
            />)}
            {!picture && <UploadBox 
                handleDrag={handleDrag}
                dragActive={dragActive}
                handleFileSelected={handleFileSelected}
            />}
            {dragActive && <DragFileElement 
                onDragEnter={handleDrag} 
                onDragLeave={handleDrag} 
                onDragOver={handleDrag} 
                onDrop={handleDrop} 
            />}
        </>
    )
}

export default VersatileUploadBox