import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

import HideImageIcon from '@mui/icons-material/HideImage';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import ShareIcon from '@mui/icons-material/Share';

function Dropdown() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div className='ml-auto'>
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
              <MoreVertIcon/>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>  
          </MenuItem>
         
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
             < ReportGmailerrorredIcon fontSize="small" />
            </ListItemIcon>
           Report
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SaveAltIcon fontSize="small" />
            </ListItemIcon>
            Save
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <InsertLinkIcon fontSize="small" />
            </ListItemIcon>
            Copy Link
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DynamicFeedIcon fontSize="small" />
            </ListItemIcon>
            See All Post
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <HideImageIcon fontSize="small" />
            </ListItemIcon>
            Hide post
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ShareIcon fontSize="small" />
            </ListItemIcon>
            Share to
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              < CancelPresentationIcon fontSize="small" />
            </ListItemIcon>
            Cancel
          </MenuItem>
        </Menu>
      </React.Fragment>
      </div>
    );
  }
  
  export default Dropdown;
  