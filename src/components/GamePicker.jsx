import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Minessweeepr from "./Minessweeper/Minessweeper.jsx";
import Tenzies from "./Tenzies/Tenzies.jsx";
import Memorize from "./Memorize/Memorize.jsx";

export default function GamePicker() {
    const { gameName } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        setGame(gameName);
    }, [gameName]);

    let componentToRender;

    if (gameName == "minessweeper") {
        componentToRender = <Minessweeepr />;
    } else if (gameName == "tenzies") {
        componentToRender = <Tenzies />;
    } else if (gameName == "memorize") {
        componentToRender = <Memorize />;
    }

    return <>{componentToRender}</>;
}
