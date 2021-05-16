import React, { useState } from 'react'
import '../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//wyświetlanie podstawowych informacji o pojedździe
// tabela vdb_vehicles
const Cloudinary = (props) => {

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'PZ_2021_wypozyczalnia')
        setLoading(true)

        const res = await fetch("https://api.cloudinary.com/v1_1/dvz618eta/image/upload", {
            method: 'POST',
            body: data
        })

        const file = await res.json()
        console.log(file)
        
        props.setImg(file.secure_url) //set props for info to database

        setImage(file.secure_url) //secure_url to database!
        setLoading(false)
    }

    return(
        <div>
            <h4>Cloudinary upload</h4>
            <input type="file" name="file_upload" placeholder="Upload image" onChange={uploadImage}></input>
            
            {loading?(<h3>Loading ...</h3>):(
                <img src={image} style={{width:'300px'}} alt="zdjęcie pojazdu"/>
            )}
            

        </div>
    )
}

export default Cloudinary;