import { useState } from "react";

const useHoverEffect = () => {
    const [hoverEffect, setHoverEffect] = useState(null)
    return [hoverEffect, setHoverEffect]
};

export default useHoverEffect;