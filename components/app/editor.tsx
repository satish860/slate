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

import { DndPlugin } from "@udecode/plate-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
      DndPlugin.configure({
        options: { enableScroller: true },
      }),
    ],
    override: {
      components: createPlateUI({ draggable: true, placeholder: true }),
    },
  });

  return (
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  );
}
