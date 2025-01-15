import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Cat = (props) => {
  return (
    <View style={{width:"100%",height:"200px",backgroundColor:"purple"}}>
      <Text style={{color:"white"}}>Hello, I am {props.name}! {props.age} tuoi</Text>
    </View>
  );
}
// Định nghĩa kiểu dữ liệu cho các props
Cat.propTypes = {
  name: PropTypes.string.isRequired, // name phải là chuỗi và là bắt buộc
  age: PropTypes.string.isRequired,  // age phải là chuỗi và là bắt buộc
};

export default Cat;