import {basicSetup} from "codemirror"
import {EditorView, keymap} from "@codemirror/view"
import {EditorState} from "@codemirror/state"
import {indentWithTab} from "@codemirror/commands"

var codeArea = document.getElementById("codeToExecute")

/**
 * The object of the CodeMirror's code editor in the phase. 
 * @constant {EditorView}
 */
export const editor = new EditorView({
    extensions: [basicSetup,keymap.of([indentWithTab])],
    parent: codeArea,
})

/**
 * A Codemirror's editor state configured to read only.
 * @constant {EditorState}
 */
export const readOnlyState = EditorState.create({
    extensions:[basicSetup,EditorView.editable.of(false)]
})