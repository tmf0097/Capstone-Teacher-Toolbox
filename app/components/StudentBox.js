import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { clickedOnClass } from "../actions/actions.js";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { globalStyles } from "../global";

const StudentBox = (props) => {
  return <View></View>;
};

const styles = StyleSheet.create({
  box: {},
});

export default StudentBox;
