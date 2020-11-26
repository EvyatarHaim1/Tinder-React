import React from 'react';
import styled from 'styled-components';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton  from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <Div>
            <IconButton className="btnReplay">
                    <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="btnClose">
                    <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="btnStar">
                    <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="btnFavorite">
                    <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="btnFlashOn">
                    <FlashOnIcon fontSize="large"/>
            </IconButton>
        </Div>
    )
}

export default SwipeButtons;

const Div = styled.div`
   position: fixed;
   bottom: 10vh;
   width: 100%;
   display: flex;
   justify-content: space-evenly;

   .MuiIconButton-root {
       background-color: white;
       box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3) !important;
   }

   .btnReplay{
       padding: 3vw !important;
       color: #f5b748 !important;
   }

   .btnClose{
       padding: 3vw !important;
       color: #ec5e6f !important;
   }

   .btnStar{
       padding: 3vw !important;
       color: #62b4f9 !important;
   }

   .btnFavorite{
       padding: 3vw !important;
       color: #4BCB94 !important;
   }

   .btnFlashOn{
       padding: 3vw !important;
       color: #9B54D8 !important;
   }

`