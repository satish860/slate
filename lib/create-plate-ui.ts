// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { withProps } from "@udecode/cn";
import { AIPlugin } from "@udecode/plate-ai/react";
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  UnderlinePlugin,
} from "@udecode/plate-basic-marks/react";
import { BlockquotePlugin } from "@udecode/plate-block-quote/react";
import {
  CodeBlockPlugin,
  CodeLinePlugin,
  CodeSyntaxPlugin,
} from "@udecode/plate-code-block/react";
import { CommentsPlugin } from "@udecode/plate-comments/react";
import { ParagraphPlugin } from "@udecode/plate-common/react";
import {
  type NodeComponent,
  PlateElement,
  PlateLeaf,
} from "@udecode/plate-common/react";
import { DatePlugin } from "@udecode/plate-date/react";
import { EmojiInputPlugin } from "@udecode/plate-emoji/react";
import { ExcalidrawPlugin } from "@udecode/plate-excalidraw/react";
import { HEADING_KEYS } from "@udecode/plate-heading";
import { HighlightPlugin } from "@udecode/plate-highlight/react";
import { HorizontalRulePlugin } from "@udecode/plate-horizontal-rule/react";
import { KbdPlugin } from "@udecode/plate-kbd/react";
import { ColumnItemPlugin, ColumnPlugin } from "@udecode/plate-layout/react";
import { LinkPlugin } from "@udecode/plate-link/react";
import { ListItemPlugin } from "@udecode/plate-list/react";
import { ImagePlugin, MediaEmbedPlugin } from "@udecode/plate-media/react";
import {
  MentionInputPlugin,
  MentionPlugin,
} from "@udecode/plate-mention/react";
import {
  TableCellHeaderPlugin,
  TableCellPlugin,
  TablePlugin,
  TableRowPlugin,
} from "@udecode/plate-table/react";
import { TogglePlugin } from "@udecode/plate-toggle/react";

import { AILeaf } from "@/components/plate-ui/ai-leaf";
import { BlockquoteElement } from "@/components/plate-ui/blockquote-element";
import { CodeBlockElement } from "@/components/plate-ui/code-block-element";
import { CodeLeaf } from "@/components/plate-ui/code-leaf";
import { CodeLineElement } from "@/components/plate-ui/code-line-element";
import { CodeSyntaxLeaf } from "@/components/plate-ui/code-syntax-leaf";
import { ColumnElement } from "@/components/plate-ui/column-element";
import { ColumnGroupElement } from "@/components/plate-ui/column-group-element";
import { CommentLeaf } from "@/components/plate-ui/comment-leaf";
import { DateElement } from "@/components/plate-ui/date-element";
import { EmojiInputElement } from "@/components/plate-ui/emoji-input-element";
import { ExcalidrawElement } from "@/components/plate-ui/excalidraw-element";
import { HeadingElement } from "@/components/plate-ui/heading-element";
import { HighlightLeaf } from "@/components/plate-ui/highlight-leaf";
import { HrElement } from "@/components/plate-ui/hr-element";
import { ImageElement } from "@/components/plate-ui/image-element";
import { KbdLeaf } from "@/components/plate-ui/kbd-leaf";
import { LinkElement } from "@/components/plate-ui/link-element";
import { MediaEmbedElement } from "@/components/plate-ui/media-embed-element";
import { MentionElement } from "@/components/plate-ui/mention-element";
import { MentionInputElement } from "@/components/plate-ui/mention-input-element";
import { ParagraphElement } from "@/components/plate-ui/paragraph-element";
import { withPlaceholders } from "@/components/plate-ui/placeholder";
import {
  TableCellElement,
  TableCellHeaderElement,
} from "@/components/plate-ui/table-cell-element";
import { TableElement } from "@/components/plate-ui/table-element";
import { TableRowElement } from "@/components/plate-ui/table-row-element";
// import { TodoListElement } from "@/components/plate-ui/todo-list-element";
import { ToggleElement } from "@/components/plate-ui/toggle-element";
import { withDraggables } from "@/components/plate-ui/with-draggables";

export const createPlateUI = ({
  draggable,
  placeholder,
}: { draggable?: boolean; placeholder?: boolean } = {}) => {
  let components: Record<string, NodeComponent> = {
    [AIPlugin.key]: AILeaf,
    [BlockquotePlugin.key]: BlockquoteElement,
    [BoldPlugin.key]: withProps(PlateLeaf, { as: "strong" }),
    [CodeBlockPlugin.key]: CodeBlockElement,
    [CodeLinePlugin.key]: CodeLineElement,
    [CodePlugin.key]: CodeLeaf,
    [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
    [ColumnItemPlugin.key]: ColumnElement,
    [ColumnPlugin.key]: ColumnGroupElement,
    [CommentsPlugin.key]: CommentLeaf,
    [DatePlugin.key]: DateElement,
    [EmojiInputPlugin.key]: EmojiInputElement,
    [ExcalidrawPlugin.key]: ExcalidrawElement,
    [HEADING_KEYS.h1]: withProps(HeadingElement, { variant: "h1" }),
    [HEADING_KEYS.h2]: withProps(HeadingElement, { variant: "h2" }),
    [HEADING_KEYS.h3]: withProps(HeadingElement, { variant: "h3" }),
    [HEADING_KEYS.h4]: withProps(HeadingElement, { variant: "h4" }),
    [HEADING_KEYS.h5]: withProps(HeadingElement, { variant: "h5" }),
    [HEADING_KEYS.h6]: withProps(HeadingElement, { variant: "h6" }),
    [HighlightPlugin.key]: HighlightLeaf,
    [HorizontalRulePlugin.key]: HrElement,
    [ImagePlugin.key]: ImageElement,
    [ItalicPlugin.key]: withProps(PlateLeaf, { as: "em" }),
    [KbdPlugin.key]: KbdLeaf,
    [LinkPlugin.key]: LinkElement,
    [ListItemPlugin.key]: withProps(PlateElement, { as: "li" }),
    [MediaEmbedPlugin.key]: MediaEmbedElement,
    [MentionInputPlugin.key]: MentionInputElement,
    [MentionPlugin.key]: MentionElement,
    [ParagraphPlugin.key]: ParagraphElement,
    [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: "s" }),
    [SubscriptPlugin.key]: withProps(PlateLeaf, { as: "sub" }),
    [SuperscriptPlugin.key]: withProps(PlateLeaf, { as: "sup" }),
    [TableCellHeaderPlugin.key]: TableCellHeaderElement,
    [TableCellPlugin.key]: TableCellElement,
    [TablePlugin.key]: TableElement,
    [TableRowPlugin.key]: TableRowElement,
    // [TodoListPlugin.key]: TodoListElement,
    [TogglePlugin.key]: ToggleElement,
    [UnderlinePlugin.key]: withProps(PlateLeaf, { as: "u" }),
  };

  if (placeholder) {
    components = withPlaceholders(components);
  }
  if (draggable) {
    components = withDraggables(components);
  }

  return components;
};
