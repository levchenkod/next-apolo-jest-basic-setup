"use server";

import { NextResponse } from "next/server";
import { gql } from "@apollo/client";
import { graphClient } from "app/utils/graphClient";

interface RichDescription {
  json: any;
}

interface FAQ {
  title: string;
  richDescription: RichDescription;
}

export type { FAQ };

async function GET() {
  try {
    const query = gql`
      query queryFAQ {
        faqs {
          title
          richDescription {
            json
          }
        }
      }
    `;

    const { data }: { data: { faqs: FAQ[] } } = await graphClient().query({
      query,
    });

    return NextResponse.json({ data: data.faqs });
  } catch (error) {
    return NextResponse.json({ message: error?.toString() }, { status: 500 });
  }
}

export { GET };
