import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Tag } from "antd";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const Create = () => {
    return (
        <>
            <Tag>Nice</Tag>
            <NavLink to="/">

                <Button>
                    Go back
                </Button>
            </NavLink>
        </>
    );
};

export default Create;
