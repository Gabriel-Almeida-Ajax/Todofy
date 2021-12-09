import styled from "styled-components";

export const Container = styled.div`    
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;
    opacity: ${props => props.done ? 0.6 : 1};

    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.05);
    };

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;

        h2 {
            font-size: 16px;
            font-weight: normal;
            color: #737380;
        }

        button {
            width: 40px;
            height: 40px;
            border-radius: 18px;
            border: 0;
            background: #ffbb3d;
            color: #fff;
            transition: background 0.2s;
            cursor: pointer;

        }
    }

`;