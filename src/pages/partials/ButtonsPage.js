import React from 'react'
import Button from "../../components/ui/Button";
const ButtonsPage = () => {
    return (
        <div className="space-x-1 mb-4 md:space-x-6 space-y-3">
            <Button color="primary">Primary</Button>
            <Button color="success">Success</Button>
            <Button color="danger">Danger</Button>
            <Button color="warning">Warning</Button>
            <Button color="dark">Dark</Button>
            <Button color="indigo">Indigo</Button>
        </div>
    )
}

export default ButtonsPage
