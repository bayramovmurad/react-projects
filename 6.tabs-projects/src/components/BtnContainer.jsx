const BtnContainer = ({data,setCurrentItem}) => {
    
  return (
    <div>
        {
            data.map((item,index) => {
console.log(index);
               return <div key={item.id}>
                    <button onClick={() => setCurrentItem(index)}><strong>{item.company}</strong></button>
                </div>
})
        }
    </div>
  )
}
export default BtnContainer