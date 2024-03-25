import React from 'react';
import { Image, Text } from '@chakra-ui/react';

const FLLogo = () => {
  return (
    <>
      <Text color="gold" fontSize="4xl" fontWeight="bold" mb={4}> {/* Added margin bottom for spacing */}
        COMING SOON...
      </Text>
      <Image alt="Logo" src="https://res.cloudinary.com/ddyecvz0i/image/upload/v1676487528/FL/fllogo_m8xsex.png" className="pulsating-logo" />
      <Text color="gold" fontSize="4xl" fontWeight="bold" mb={4}> {/* Added margin bottom for spacing */}
        ...AN UNPRECEDENTED NETWORK
      </Text>
    </>
  );
};

export default FLLogo;
