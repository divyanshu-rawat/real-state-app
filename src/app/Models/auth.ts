import { user } from './user';
import { token } from './token';


interface auth {
    user: user,
    authenticate: boolean,
    token: token
}
