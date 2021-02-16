import {useState} from "react";

//@ts-ignore
export default function withLoadAnimation(WrappedComponent) {
    const [loadState, setLoadState] = useState(false);
    return (props:any) => {
        const className = props.className
        const c =<WrappedComponent
            {...props}
            onLoad={() => setLoadState(true)}
            className={loadState ? className+" animate-appear" :className}
        />
        return c
    }
}
