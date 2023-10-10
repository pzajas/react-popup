import { Popup } from '@components/popup/Popup'
import { useState } from 'react'

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(true)

  return <div>{isModalVisible ? <Popup setIsModalVisible={setIsModalVisible} /> : null}</div>
}

export default App
