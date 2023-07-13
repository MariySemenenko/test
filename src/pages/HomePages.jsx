import { H1, H2, Div } from '../pages/pagesStyled';

const HomePage = () => {
  return (
    <div>
      <Div>
        <H1>Welcome to Phonebook!</H1>
        <H2>Here you can save your contact</H2>
      </Div>
      <div
        style={{
          backgroundImage: `url('https://st2.depositphotos.com/3252397/6557/i/450/depositphotos_65575835-stock-photo-contact-us-keyboard-green.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh', // мінімальна висота картинки
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></div>
    </div>
  );
};

export default HomePage;
