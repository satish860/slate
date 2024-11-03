"use client";

import React from "react";
import { Plate, usePlateEditor } from "@udecode/plate-common/react";
import { Editor, EditorContainer } from "@/components/plate-ui/editor";
import {
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  CodePlugin,
} from "@udecode/plate-basic-marks/react";
import { HeadingPlugin } from "@udecode/plate-heading/react";
import { BlockquotePlugin } from "@udecode/plate-block-quote/react";
import { CodeBlockPlugin } from "@udecode/plate-code-block/react";
import { createPlateUI } from "@/lib/create-plate-ui";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";

export default function BasicEditor() {
  const localValue =
    typeof window !== "undefined" && localStorage.getItem("editorContent");

  const value = [
    {
      type: "p",
      children: [
        {
          text: "Hello From Slate!!",
        },
      ],
    },
  ];

  const editor = usePlateEditor({
    value: localValue ? JSON.parse(localValue) : value,
    plugins: [
      BoldPlugin,
      ItalicPlugin,
      UnderlinePlugin,
      CodePlugin,
      HeadingPlugin,
      BlockquotePlugin,
      CodeBlockPlugin,
    ],
    override: {
      components: createPlateUI(),
    },
  });

  return (
    <Plate
      editor={editor}
      onChange={({ value }) => {
        localStorage.setItem("editorContent", JSON.stringify(value));
      }}
    >
      <FixedToolbar>
        <FixedToolbarButtons />
      </FixedToolbar>
      <EditorContainer>
        <Editor placeholder="Type..." />
      </EditorContainer>
    </Plate>
  );
}
