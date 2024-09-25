import OtpInput from 'react-otp-input';
import { Button } from "@component/buttons";
import Typography from "@component/Typography";
import FlexBox from "@component/FlexBox";
import Box from "@component/Box";
import Image from "@component/Image";

export default function OTPScreen({ otp, setOtp, handleVerify }) {
  return (
    <Box p="2rem" borderRadius="8px" boxShadow="large" bg="#ffffff" maxWidth="400px" mx="auto">
      <FlexBox justifyContent="center" mb="2rem">
        <Image src="/assets/images/logoWhite.png" height={40} />
      </FlexBox>

      <Typography fontWeight="600" fontSize="20px" textAlign="center" color="#298F52" mb="1.5rem">
        Enter OTP
      </Typography>

      <Typography fontSize="14px" textAlign="center" color="#7d7d7d" mb="1.5rem">
        We have sent a 6-digit OTP to your phone number. Please enter it below.
      </Typography>

      <FlexBox justifyContent="center" mb="1.5rem">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span style={{ margin: '0 10px', color: '#298F52' }}>-</span>}
          inputType="tel"
          containerStyle={{ display: 'flex', justifyContent: 'center', gap: '8px' }}
          inputStyle={{
            width: "3rem",
            height: "3.5rem",
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '18px',
            textAlign: 'center',
            outline: 'none',
            transition: 'border-color 0.3s ease-in-out',
            color: '#333',
          }}
          focusStyle={{ borderColor: '#298F52' }}
        />
      </FlexBox>

      <Button
        mt="1rem"
        mb="1.5rem"
        variant="contained"
        color="primary"
        borderRadius={20}
        type="button"
        onClick={handleVerify}
        fullwidth
        style={{ backgroundColor: '#298F52', color: '#FFFFFF' }}
      >
        <Typography color="#FFFFFF" fontWeight="500">
          Verify OTP
        </Typography>
      </Button>

      <Typography textAlign="center" color="#7d7d7d" fontSize="14px">
        Didn't receive the OTP? <span style={{ color: '#298F52', cursor: 'pointer' }}>Resend OTP</span>
      </Typography>
    </Box>
  );
}
