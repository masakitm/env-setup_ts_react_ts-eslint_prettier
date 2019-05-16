type Messages = {
  [key: string]: string
}

const messages: Messages = {
  hello: 'hello',
  name: 'world',
};

export const sayHello = (): string => `${messages.hello}, ${messages.name}`;
export const sayHelloReact = (): string => {
  const newMessages: Messages = { ...messages, name: 'react' };
  return `${newMessages.hello}, ${newMessages.name}`;
};
