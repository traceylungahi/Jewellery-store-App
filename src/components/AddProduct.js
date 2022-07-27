import React from 'react';
import { RedBar, TextField } from '@material-ui/core'

function AddProduct() {
    return(
        <div>
            <RedBar />
                <TextField label={'margin="none"'} id="margin-none" />
                <RedBar />
                <TextField label={'margin="dense"'} id="margin-dense" margin="dense" />
                <RedBar />
                <TextField label={'margin="normal"'} id="margin-normal" margin="normal" />
            <RedBar />
        </div>
    )
};

export default AddProduct;
