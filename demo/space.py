
import gradio as gr
from app import demo as app
import os

_docs = {'MultimodalChatbot': {'description': 'Displays a chatbot output showing both user submitted messages and responses. Supports a subset of Markdown including bold, italics, code, tables. Also supports audio/video/image files, which are displayed in the MultimodalChatbot, and other kinds of files which are displayed as links.\n', 'members': {'__init__': {'value': {'type': 'list[\n        list[\n            str\n            | tuple[str]\n            | tuple[str | pathlib.Path, str]\n            | None\n        ]\n    ]\n    | Callable\n    | None', 'default': 'None', 'description': 'Default value to show in chatbot. If callable, the function will be called whenever the app loads to set the initial value of the component.'}, 'label': {'type': 'str | None', 'default': 'None', 'description': 'The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.'}, 'every': {'type': 'float | None', 'default': 'None', 'description': "If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. Queue must be enabled. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute."}, 'show_label': {'type': 'bool | None', 'default': 'None', 'description': 'if True, will display label.'}, 'container': {'type': 'bool', 'default': 'True', 'description': 'If True, will place the component in a container - providing some extra padding around the border.'}, 'scale': {'type': 'int | None', 'default': 'None', 'description': 'relative width compared to adjacent Components in a Row. For example, if Component A has scale=2, and Component B has scale=1, A will be twice as wide as B. Should be an integer.'}, 'min_width': {'type': 'int', 'default': '160', 'description': 'minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.'}, 'visible': {'type': 'bool', 'default': 'True', 'description': 'If False, component will be hidden.'}, 'elem_id': {'type': 'str | None', 'default': 'None', 'description': 'An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'elem_classes': {'type': 'list[str] | str | None', 'default': 'None', 'description': 'An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'render': {'type': 'bool', 'default': 'True', 'description': 'If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.'}, 'height': {'type': 'int | None', 'default': 'None', 'description': 'height of the component in pixels.'}, 'latex_delimiters': {'type': 'list[dict[str, str | bool]] | None', 'default': 'None', 'description': 'A list of dicts of the form {"left": open delimiter (str), "right": close delimiter (str), "display": whether to display in newline (bool)} that will be used to render LaTeX expressions. If not provided, `latex_delimiters` is set to `[{ "left": "$$", "right": "$$", "display": True }]`, so only expressions enclosed in $$ delimiters will be rendered as LaTeX, and in a new line. Pass in an empty list to disable LaTeX rendering. For more information, see the [KaTeX documentation](https://katex.org/docs/autorender.html).'}, 'rtl': {'type': 'bool', 'default': 'False', 'description': 'If True, sets the direction of the rendered text to right-to-left. Default is False, which renders text left-to-right.'}, 'show_share_button': {'type': 'bool | None', 'default': 'None', 'description': 'If True, will show a share icon in the corner of the component that allows user to share outputs to Hugging Face Spaces Discussions. If False, icon does not appear. If set to None (default behavior), then the icon appears if this Gradio app is launched on Spaces, but not otherwise.'}, 'show_copy_button': {'type': 'bool', 'default': 'False', 'description': 'If True, will show a copy button for each chatbot message.'}, 'avatar_images': {'type': 'tuple[\n        str | pathlib.Path | None, str | pathlib.Path | None\n    ]\n    | None', 'default': 'None', 'description': 'Tuple of two avatar image paths or URLs for user and bot (in that order). Pass None for either the user or bot image to skip. Must be within the working directory of the Gradio app or an external URL.'}, 'sanitize_html': {'type': 'bool', 'default': 'True', 'description': 'If False, will disable HTML sanitization for chatbot messages. This is not recommended, as it can lead to security vulnerabilities.'}, 'render_markdown': {'type': 'bool', 'default': 'True', 'description': 'If False, will disable Markdown rendering for chatbot messages.'}, 'bubble_full_width': {'type': 'bool', 'default': 'True', 'description': 'If False, the chat bubble will fit to the content of the message. If True (default), the chat bubble will be the full width of the component.'}, 'line_breaks': {'type': 'bool', 'default': 'True', 'description': 'If True (default), will enable Github-flavored Markdown line breaks in chatbot messages. If False, single new lines will be ignored. Only applies if `render_markdown` is True.'}, 'likeable': {'type': 'bool', 'default': 'False', 'description': 'Whether the chat messages display a like or dislike button. Set automatically by the .like method but has to be present in the signature for it to show up in the config.'}, 'layout': {'type': '"panel" | "bubble" | None', 'default': 'None', 'description': 'If "panel", will display the chatbot in a llm style layout. If "bubble", will display the chatbot with message bubbles, with the user and bot messages on alterating sides. Will default to "bubble".'}}, 'postprocess': {'value': {'type': 'list[\n    list[str | tuple[str] | tuple[str, str] | None] | tuple\n]', 'description': None}}, 'preprocess': {'return': {'type': 'list[MultimodalMessage] | None', 'description': None}, 'value': None}}, 'events': {'change': {'type': None, 'default': None, 'description': 'Triggered when the value of the MultimodalChatbot changes either because of user input (e.g. a user types in a textbox) OR because of a function update (e.g. an image receives a value from the output of an event trigger). See `.input()` for a listener that is only triggered by user input.'}, 'select': {'type': None, 'default': None, 'description': 'Event listener for when the user selects or deselects the MultimodalChatbot. Uses event data gradio.SelectData to carry `value` referring to the label of the MultimodalChatbot, and `selected` to refer to state of the MultimodalChatbot. See EventData documentation on how to use this event data'}, 'like': {'type': None, 'default': None, 'description': 'This listener is triggered when the user likes/dislikes from within the MultimodalChatbot. This event has EventData of type gradio.LikeData that carries information, accessible through LikeData.index and LikeData.value. See EventData documentation on how to use this event data.'}}}, '__meta__': {'additional_interfaces': {'MultimodalMessage': {'source': 'class MultimodalMessage(GradioModel):\n    text: Optional[str] = None\n    files: Optional[List[FileMessage]] = None', 'refs': ['FileMessage']}, 'FileMessage': {'source': 'class FileMessage(GradioModel):\n    file: FileData\n    alt_text: Optional[str] = None'}}, 'user_fn_refs': {'MultimodalChatbot': ['MultimodalMessage']}}}
    
abs_path = os.path.join(os.path.dirname(__file__), "css.css")

with gr.Blocks(
    css=abs_path,
    theme=gr.themes.Default(
        font_mono=[
            gr.themes.GoogleFont("Inconsolata"),
            "monospace",
        ],
    ),
) as demo:
    gr.Markdown(
"""
# `gradio_multimodalchatbot`

<div style="display: flex; gap: 7px;">
<a href="https://pypi.org/project/gradio_multimodalchatbot/" target="_blank"><img alt="PyPI - Version" src="https://img.shields.io/pypi/v/gradio_multimodalchatbot"></a>  <a href="https://huggingface.co/spaces/freddyaboulton/gradio_multimodalchatbot//discussions" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/%F0%9F%A4%97%20Discuss-%23097EFF?style=flat&logoColor=black"></a>
</div>

Display text and media files (audio, video, images) in the same chat message bubble.
""", elem_classes=["md-custom"], header_links=True)
    app.render()
    gr.Markdown(
"""
## Installation

```bash
pip install gradio_multimodalchatbot
```

## Usage

```python

import gradio as gr
from gradio_multimodalchatbot import MultimodalChatbot
from gradio.data_classes import FileData

user_msg1 = {"text": "Hello, what is in this image?",
             "files": [{"file": FileData(path="https://gradio-builds.s3.amazonaws.com/diffusion_image/cute_dog.jpg")}]
             }
bot_msg1 = {"text": "It is a very cute dog",
            "files": []}

user_msg2 = {"text": "Describe this audio clip please.",
             "files": [{"file": FileData(path="cantina.wav")}]}
bot_msg2 = {"text": "It is the cantina song from Star Wars",
            "files": []}

user_msg3 = {"text": "Give me a video clip please.",
             "files": []}
bot_msg3 = {"text": "Here is a video clip of the world",
            "files": [{"file": FileData(path="world.mp4")},
                      {"file": FileData(path="cantina.wav")}]}

conversation = [[user_msg1, bot_msg1], [user_msg2, bot_msg2], [user_msg3, bot_msg3]]

with gr.Blocks() as demo:
    MultimodalChatbot(value=conversation, height=800)


if __name__ == "__main__":
    demo.launch()

```
""", elem_classes=["md-custom"], header_links=True)


    gr.Markdown("""
## `MultimodalChatbot`

### Initialization
""", elem_classes=["md-custom"], header_links=True)

    gr.ParamViewer(value=_docs["MultimodalChatbot"]["members"]["__init__"], linkify=['MultimodalMessage', 'FileMessage'])


    gr.Markdown("### Events")
    gr.ParamViewer(value=_docs["MultimodalChatbot"]["events"], linkify=['Event'])




    gr.Markdown("""

### User function

The impact on the users predict function varies depending on whether the component is used as an input or output for an event (or both).

- When used as an Input, the component only impacts the input signature of the user function. 
- When used as an output, the component only impacts the return signature of the user function. 

The code snippet below is accurate in cases where the component is used as both an input and an output.



 ```python
def predict(
    value: list[MultimodalMessage] | None
) -> list[
    list[str | tuple[str] | tuple[str, str] | None] | tuple
]:
    return value
```
""", elem_classes=["md-custom", "MultimodalChatbot-user-fn"], header_links=True)




    code_MultimodalMessage = gr.Markdown("""
## `MultimodalMessage`
```python
class MultimodalMessage(GradioModel):
    text: Optional[str] = None
    files: Optional[List[FileMessage]] = None
```""", elem_classes=["md-custom", "MultimodalMessage"], header_links=True)

    code_FileMessage = gr.Markdown("""
## `FileMessage`
```python
class FileMessage(GradioModel):
    file: FileData
    alt_text: Optional[str] = None
```""", elem_classes=["md-custom", "FileMessage"], header_links=True)

    demo.load(None, js=r"""function() {
    const refs = {
            MultimodalMessage: ['FileMessage'], 
            FileMessage: [], };
    const user_fn_refs = {
          MultimodalChatbot: ['MultimodalMessage'], };
    requestAnimationFrame(() => {

        Object.entries(user_fn_refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}-user-fn`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })
        
        Object.entries(refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })
    })
}

""")

demo.launch()
