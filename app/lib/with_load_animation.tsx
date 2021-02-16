import {useState} from "react";

export default function withLoadAnimation(WrappedComponent) {
    const [loadState, setLoadState] = useState(false);
    return (props) => {
        const className = props.className
        const c =<WrappedComponent
            {...props}
            onLoad={() => setLoadState(true)}
            className={loadState ? className+" animate-appear" :className}
        />
        return c
    }
}
