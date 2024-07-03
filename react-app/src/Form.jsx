function Formsubmit(event){
    
    console.log("form was submitted");
    event.Preventdefault();

}

export default function Form(){
    return(
        <form onSubmit={Formsubmit}>
            <input placeholder="write something "></input>
            <button>submit</button>
        </form>
    )
}