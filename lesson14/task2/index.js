import { createMessenger } from './module';

const messanger1 = createMessenger();
messanger1.sendMessage('Anna'); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode

const messanger2 = createMessenger();
messanger2.setMessage('You are learning JS and you do it well');
messanger2.sendMessage('Michael'); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode
