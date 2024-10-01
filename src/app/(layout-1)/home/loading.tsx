import FlexBox from "@component/FlexBox";
import Spinner from "@component/Spinner";

export default function Loading() {
  return <>
  <FlexBox justifyContent="center">
    <Spinner />
  </FlexBox>
  </>;
}
