import styled from 'styled-components';


export const NavBarStyle = styled.nav` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 20px;
    background-color: #fff;
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

        .icons{
            color: ${({ theme }) => theme.color.primary};
            width: 32px;
            height: 32px;
        }
 
`;

export const DivIcons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 25%;
    `;

export const DivBtnIcons = styled.div`
    display: flex;
    /* border: 1px solid black; */
    width: 25%;
    justify-content: space-between;
    align-items: center;
    flex-direction:  row;
`;

export const LogoContainer = styled.div`
    /* border: 1px solid black; */
   
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    flex-direction: row;

    a{
     text-decoration: none;
    }

    h1{
      text-shadow: 2px 2px 4px rgba(55, 155, 210, 0.8);
        color: ${({ theme }) => theme.color.primary};
        font-size: 2rem;
    }


`;

