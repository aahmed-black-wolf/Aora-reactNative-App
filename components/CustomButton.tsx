import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  handlePress: ((event: GestureResponderEvent) => void) | undefined;
  containerStyles: string;
  textStyle?: string;
  isLoading?: boolean;
};

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyle,
  isLoading,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-secondary px-[30px] py-[12px] justify-center items-center rounded-md ${containerStyles}`}
    >
      <Text className={`font-pregular text-primary ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
