import React from "react";

interface IGroupNumber {
    group: string;
}

export const GroupNumber: React.FC<IGroupNumber> = ({ group }) => {
    return (
        <div className="group">
            <div className="group__txt">
                <p>Группа</p>
            </div>
            <div className="group__separate-line"></div>
            <div className="group__number">
                <p>{group}</p>
            </div>
        </div>
    );
};
