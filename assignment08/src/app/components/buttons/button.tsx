// "use client"
import { buttonPropsType } from "@/typesDir/buttonTypesProps";

export default function Button(props: buttonPropsType){
    return(
        <button 
            className="mr-2"
            onClick={props.onClickHandler}
        >
          {props.text}
        </button>
    );
};