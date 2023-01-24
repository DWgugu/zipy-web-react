import { TextField } from '@mui/material';
import classes from './Login.module.css';

const Login = () => {
  return (
    <div className={classes.login_page}>
        <div className={classes.form_page}>
            <div className={classes.form}>
                <div>
                    <h2>Entrar</h2>
                </div>
                <div className={classes.form_input}>
                    <div>
                      <TextField id="outlined-basic" label="Usuário" variant="outlined" />  
                    </div>
                    <div>
                      <TextField id="outlined-basic" label="Senha" variant="outlined" />  
                    </div>
                    <div>
                        <button>Acessar</button>
                    </div>
                </div>
            </div>
            
        </div>
        <div className={classes.illustration}>
            <img src="../src/assets/imgs-svg/illustration.svg" alt="" />
        </div>
    </div>
  )
}

export default Login