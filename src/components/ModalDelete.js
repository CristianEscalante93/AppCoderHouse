import { Modal, View, Text, Button, StyleSheet } from "react-native"

const ModalDelete = ({ product, visible, closeModal, onDelete }) => {

  return <Modal
    visible={visible}
    animationType="slide"
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>¿esta seguro que quiere borrar?</Text>
        <Text style={styles.modalText}>{product.title}</Text>
        <Button title="Confirmo" onPress={onDelete} />
        <Button title="Cerrar" onPress={() => closeModal()} />
      </View>
    </View>
  </Modal>
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"red"
  },
  modalContent: {
    width: "80%",
    borderWidth: 5,
    borderRadius:15,
    padding: 10,
    gap: 10
  },
  modalText: {
    textAlign: "center",
    fontWeight: "bold"
  }
})
export default ModalDelete