function NewAdvertPage(){

    return (
        <div>
            <input type="file" name="photo" onChange={(event) =>{
                console.log(event.target.files[0]);

            }}></input>
        </div>
    )
}

export default NewAdvertPage;