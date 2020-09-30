import API from '../api/api';

const WRITE = '/write';
const READ = '/read';

class ClientChat extends API{

    getDataChat = () => {
        return this.get(process.env.REACT_APP_SERVER + READ);
    }

    writeDataChat = (data) => {
        return this.post(process.env.REACT_APP_SERVER + WRITE, data);
    }
}

export default new ClientChat();