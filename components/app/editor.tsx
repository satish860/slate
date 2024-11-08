"use client";

import React, { useRef } from "react";
import { Plate, usePlateEditor } from "@udecode/plate-common/react";
import { Editor, EditorContainer } from "@/components/plate-ui/editor";
import {
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  CodePlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
} from "@udecode/plate-basic-marks/react";
import { IndentPlugin } from '@udecode/plate-indent/react';
import { IndentListPlugin } from '@udecode/plate-indent-list/react';
import { HEADING_KEYS } from '@udecode/plate-heading';
import { HeadingPlugin } from '@udecode/plate-heading/react';
import { ParagraphPlugin } from '@udecode/plate-common/react';
import { BlockquotePlugin } from "@udecode/plate-block-quote/react";
import { CodeBlockPlugin } from "@udecode/plate-code-block/react";
import { createPlateUI } from "@/lib/create-plate-ui";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import { aiPlugins } from '@/components/editor/plugins/ai-plugins';
import { copilotPlugins } from '@/components/editor/plugins/copilot-plugins';
import { DndPlugin } from "@udecode/plate-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";
import { CursorOverlay } from "@/components/plate-ui/cursor-overlay";
import { AutoformatPlugin } from '@udecode/plate-autoformat/react';

import { SlashPlugin } from '@udecode/plate-slash-command/react';
import { ListPlugin } from '@udecode/plate-list/react';


export default function BasicEditor() {
  const containerRef = useRef(null);
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
      ...aiPlugins,
      ...copilotPlugins,
      BoldPlugin,
      ItalicPlugin,
      UnderlinePlugin,
      CodePlugin,
      StrikethroughPlugin,
      SubscriptPlugin,
      SuperscriptPlugin,
      HeadingPlugin,
      IndentPlugin.configure({
        inject: {
          targetPlugins: [ParagraphPlugin.key, HEADING_KEYS.h1],
        }
      }),
      IndentListPlugin.configure({
        inject: {
          targetPlugins: [ParagraphPlugin.key, HEADING_KEYS.h1],
        }
      }),
      BlockquotePlugin,
      CodeBlockPlugin,
      SlashPlugin,
      ListPlugin,
      DndPlugin.configure({
        options: { enableScroller: true },
      }),
      AutoformatPlugin.configure({
        options: {
          enableUndoOnDelete: true,
        },
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
        <EditorContainer
          id="scroll_container"
          ref={containerRef}
          variant="demo"
        >
          <Editor variant="demo" placeholder="Type..." />

          <FloatingToolbar>
            <FloatingToolbarButtons />
          </FloatingToolbar>
          <CursorOverlay containerRef={containerRef} />
        </EditorContainer>
      </Plate>
    </DndProvider>
  );
}
