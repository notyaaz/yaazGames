import React, { useEffect, useState } from "react";
import { getUsers } from "../Firebase/Firestore.js";
import styles from "../../styles.js";

export default function Leaderboard() {
    const [users, setUseres] = useState();

    async function setTheUseres() {
        const ar = await getUsers();
        setUseres(ar);
    }

    useEffect(() => {
        setTheUseres();
    }, []);

    return (
        <div
            className={`${styles.sectionPadding} flex justify-center items-center flex-col mt-[100px] `}
        >
            <table className={`max-w-[1200px] w-full `}>
                <thead className="text-left bg-accent text-[1.2rem]">
                    <tr>
                        <th className="p-[12px]">Username:</th>
                        <th className="p-[12px]">Email:</th>
                        <th className="p-[12px]">Minessweeper:</th>
                        <th className="p-[12px]">Tenzies:</th>
                        <th className="p-[12px]">Memorize:</th>
                    </tr>
                </thead>
                <tbody>
                    {users ? (
                        users.map((user, index) => {
                            return (
                                <tr
                                    key={index}
                                    className={`${
                                        index % 2 == 0 ? "bg-complenetary" : "bg-complenetaryHover"
                                    } font-semibold`}
                                >
                                    <td className="p-[12px]">
                                        {user.username ? user.username : "no userfname"}
                                    </td>
                                    <td className="p-[12px]">{user.email}</td>
                                    <td className="p-[12px]">
                                        {user.msTime > 0 ? user.msTime + " seconds" : "Didn't play"}{" "}
                                    </td>
                                    <td className="p-[12px]">
                                        {user.tzTime > 0 ? user.tzTime + " seconds" : "Didn't play"}{" "}
                                    </td>
                                    <td className="p-[12px]">
                                        {user.mzScore > 0 ? user.mzScore + " points" : "Didn't play"}{" "}
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td>Loading</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
