
# `gradio_multimodalchatbot`
<a href="https://pypi.org/project/gradio_multimodalchatbot/" target="_blank"><img alt="PyPI - Version" src="https://img.shields.io/pypi/v/gradio_multimodalchatbot"></a>  <a href="https://huggingface.co/spaces/freddyaboulton/gradio_multimodalchatbot//discussions" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/%F0%9F%A4%97%20Discuss-%23097EFF?style=flat&logoColor=black"></a>

Display text and media files (audio, video, images) in the same chat message bubble.

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

## `MultimodalChatbot`

### Initialization

<table>
<thead>
<tr>
<th align="left">name</th>
<th align="left" style="width: 25%;">type</th>
<th align="left">default</th>
<th align="left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><code>value</code></td>
<td align="left" style="width: 25%;">

```python
list[
        list[
            str
            | tuple[str]
            | tuple[str | pathlib.Path, str]
            | None
        ]
    ]
    | Callable
    | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Default value to show in chatbot. If callable, the function will be called whenever the app loads to set the initial value of the component.</td>
</tr>

<tr>
<td align="left"><code>label</code></td>
<td align="left" style="width: 25%;">

```python
str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.</td>
</tr>

<tr>
<td align="left"><code>every</code></td>
<td align="left" style="width: 25%;">

```python
float | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. Queue must be enabled. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute.</td>
</tr>

<tr>
<td align="left"><code>show_label</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">if True, will display label.</td>
</tr>

<tr>
<td align="left"><code>container</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, will place the component in a container - providing some extra padding around the border.</td>
</tr>

<tr>
<td align="left"><code>scale</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">relative width compared to adjacent Components in a Row. For example, if Component A has scale=2, and Component B has scale=1, A will be twice as wide as B. Should be an integer.</td>
</tr>

<tr>
<td align="left"><code>min_width</code></td>
<td align="left" style="width: 25%;">

```python
int
```

</td>
<td align="left"><code>160</code></td>
<td align="left">minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.</td>
</tr>

<tr>
<td align="left"><code>visible</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, component will be hidden.</td>
</tr>

<tr>
<td align="left"><code>elem_id</code></td>
<td align="left" style="width: 25%;">

```python
str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.</td>
</tr>

<tr>
<td align="left"><code>elem_classes</code></td>
<td align="left" style="width: 25%;">

```python
list[str] | str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.</td>
</tr>

<tr>
<td align="left"><code>render</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.</td>
</tr>

<tr>
<td align="left"><code>height</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">height of the component in pixels.</td>
</tr>

<tr>
<td align="left"><code>latex_delimiters</code></td>
<td align="left" style="width: 25%;">

```python
list[dict[str, str | bool]] | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">A list of dicts of the form {"left": open delimiter (str), "right": close delimiter (str), "display": whether to display in newline (bool)} that will be used to render LaTeX expressions. If not provided, `latex_delimiters` is set to `[{ "left": "$$", "right": "$$", "display": True }]`, so only expressions enclosed in $$ delimiters will be rendered as LaTeX, and in a new line. Pass in an empty list to disable LaTeX rendering. For more information, see the [KaTeX documentation](https://katex.org/docs/autorender.html).</td>
</tr>

<tr>
<td align="left"><code>rtl</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>False</code></td>
<td align="left">If True, sets the direction of the rendered text to right-to-left. Default is False, which renders text left-to-right.</td>
</tr>

<tr>
<td align="left"><code>show_share_button</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">If True, will show a share icon in the corner of the component that allows user to share outputs to Hugging Face Spaces Discussions. If False, icon does not appear. If set to None (default behavior), then the icon appears if this Gradio app is launched on Spaces, but not otherwise.</td>
</tr>

<tr>
<td align="left"><code>show_copy_button</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>False</code></td>
<td align="left">If True, will show a copy button for each chatbot message.</td>
</tr>

<tr>
<td align="left"><code>avatar_images</code></td>
<td align="left" style="width: 25%;">

```python
tuple[
        str | pathlib.Path | None, str | pathlib.Path | None
    ]
    | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Tuple of two avatar image paths or URLs for user and bot (in that order). Pass None for either the user or bot image to skip. Must be within the working directory of the Gradio app or an external URL.</td>
</tr>

<tr>
<td align="left"><code>sanitize_html</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, will disable HTML sanitization for chatbot messages. This is not recommended, as it can lead to security vulnerabilities.</td>
</tr>

<tr>
<td align="left"><code>render_markdown</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, will disable Markdown rendering for chatbot messages.</td>
</tr>

<tr>
<td align="left"><code>bubble_full_width</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, the chat bubble will fit to the content of the message. If True (default), the chat bubble will be the full width of the component.</td>
</tr>

<tr>
<td align="left"><code>line_breaks</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True (default), will enable Github-flavored Markdown line breaks in chatbot messages. If False, single new lines will be ignored. Only applies if `render_markdown` is True.</td>
</tr>

<tr>
<td align="left"><code>likeable</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>False</code></td>
<td align="left">Whether the chat messages display a like or dislike button. Set automatically by the .like method but has to be present in the signature for it to show up in the config.</td>
</tr>

<tr>
<td align="left"><code>layout</code></td>
<td align="left" style="width: 25%;">

```python
"panel" | "bubble" | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">If "panel", will display the chatbot in a llm style layout. If "bubble", will display the chatbot with message bubbles, with the user and bot messages on alterating sides. Will default to "bubble".</td>
</tr>
</tbody></table>


### Events

| name | description |
|:-----|:------------|
| `change` | Triggered when the value of the MultimodalChatbot changes either because of user input (e.g. a user types in a textbox) OR because of a function update (e.g. an image receives a value from the output of an event trigger). See `.input()` for a listener that is only triggered by user input. |
| `select` | Event listener for when the user selects or deselects the MultimodalChatbot. Uses event data gradio.SelectData to carry `value` referring to the label of the MultimodalChatbot, and `selected` to refer to state of the MultimodalChatbot. See EventData documentation on how to use this event data |
| `like` | This listener is triggered when the user likes/dislikes from within the MultimodalChatbot. This event has EventData of type gradio.LikeData that carries information, accessible through LikeData.index and LikeData.value. See EventData documentation on how to use this event data. |



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
 

## `MultimodalMessage`
```python
class MultimodalMessage(GradioModel):
    text: Optional[str] = None
    files: Optional[List[FileMessage]] = None
```

## `FileMessage`
```python
class FileMessage(GradioModel):
    file: FileData
    alt_text: Optional[str] = None
```
