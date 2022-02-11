export const copyLinkFunc = (id_node: string) => {
  if (!navigator.clipboard) {
    const range = document.createRange()
    // to select text
    range.selectNode(document.getElementById(id_node)!)
    console.log(window.getSelection()?.addRange(range))
    window.getSelection()?.removeAllRanges() // clear current selection
    window.getSelection()?.addRange(range)
    document.execCommand("copy")
    // use old commandExec() way
  } else {
    navigator.clipboard
      .writeText((document.getElementById(id_node) as HTMLInputElement)?.value!)
      .then(function () {
        //alert("yeah!") // success
        console.log("copy done")
      })
      .catch(function () {
        alert("err") // error
      })
  }

  window.getSelection()?.removeAllRanges() // to deselect
}
