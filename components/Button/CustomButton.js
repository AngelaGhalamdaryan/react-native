import * as React from 'react';
import { Button } from 'react-native';

function CustomButton(props) {
    const { title, type, onClick, icon } = props;
    return (
        <>
            {type === "button" ? (
                <Button onPress={onClick} title={title} />
            ) : (
                icon
            )
            }
        </>
    );
};

export default CustomButton;
