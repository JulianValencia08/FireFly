import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { ReactComponent as Logo } from '../Logo.svg';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <Stack sx={{ background: "gray"}}
            direction="row"
            justifyContent="space-between"
            alignItems="center" padding={2}>
            <Logo width="86" height="86" />
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
                <Button sx={{ color: "black" }} target="_blank" href="https://github.com/JulianValencia08/FireFly">
                    <GitHubIcon />
                </Button>
                <Typography sx={{ color: "white" }}>
                    @FireFly
                </Typography>
            </Stack>
        </Stack>
    );
}

export default Footer;