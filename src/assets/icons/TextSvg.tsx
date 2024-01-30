function TextSvg(props: { text: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" className="scale2">
      <text
        textAnchor="middle"
        alignmentBaseline="middle"
        dominantBaseline="middle"
        x="50%"
        y="50%"
      >
        <tspan
          fontSize="70"
          fill="currentColor"
          opacity="1"
          fontFamily="宋体"
          fontWeight="Bold"
          letterSpacing="0"
        >
          {props.text}
        </tspan>
      </text>
    </svg>
  );
}

export default TextSvg;
