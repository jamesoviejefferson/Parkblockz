"use client";
import { FadeUp, Stagger, Item } from "./Motion";

export default function Buyers() {
  return (
    <section
      id="buyers"
      className="section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Liquid glass background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 480px at 15% 0%, rgba(59,160,255,.10), transparent 55%)," +
            "radial-gradient(900px 520px at 85% 20%, rgba(124,92,255,.12), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <FadeUp>
          <div className="kicker">Strategic buyers</div>
          <h2 className="h2" style={{ marginTop: 10, maxWidth: 820 }}>
            Acquisition rationale
          </h2>
          <p className="p" style={{ maxWidth: 940, marginTop: 14 }}>
            ParkBlockX™ was designed to integrate cleanly into existing
            parking, payments, and infrastructure ecosystems.
            <br /><br />
            The platform represents a converged software layer that
            consolidates detection, payments, pricing, enforcement,
            connectivity, and energy into a single, licensable architecture.
          </p>
        </FadeUp>

        <div style={{ height: 28 }} />

        {/* Buyer Profiles */}
        <Stagger>
          <div className="grid grid2">
            <Item>
              <div className="card" style={{ padding: 22 }}>
                <h3 style={{ fontWeight: 900 }}>Parking OEMs & Meter Manufacturers</h3>
                <p className="p" style={{ fontSize: 16, marginTop: 10 }}>
                  Provides a modern software stack that replaces fragmented
                  firmware, legacy backends, and single-rail payment systems.
                  <br /><br />
                  Enables OEMs to transition from hardware-centric sales
                  to recurring software licensing and platform revenue.
                </p>
              </div>
            </Item>

            <Item>
              <div className="card" style={{ padding: 22 }}>
                <h3 style={{ fontWeight: 900 }}>Global Parking Operators</h3>
                <p className="p" style={{ fontSize: 16, marginTop: 10 }}>
                  Delivers unified visibility across pricing, utilization,
                  enforcement, and revenue — including remote and
                  non-traditional locations.
                  <br /><br />
                  Reduces operational overhead while increasing
                  yield per space through dynamic pricing.
                </p>
              </div>
            </Item>

            <Item>
              <div className="card" style={{ padding: 22 }}>
                <h3 style={{ fontWeight: 900 }}>Payment Networks & Fintech Platforms</h3>
                <p className="p" style={{ fontSize: 16, marginTop: 10 }}>
                  Extends multi-rail payments into physical infrastructure
                  with programmable settlement and compliance.
                  <br /><br />
                  Positions parking as a high-frequency, real-world
                  transaction surface for fiat, stablecoins, and future CBDCs.
                </p>
              </div>
            </Item>

            <Item>
              <div className="card" style={{ padding: 22 }}>
                <h3 style={{ fontWeight: 900 }}>Telecom & Satellite Providers</h3>
                <p className="p" style={{ fontSize: 16, marginTop: 10 }}>
                  Creates recurring demand for connectivity in locations
                  historically unreachable by terrestrial networks.
                  <br /><br />
                  Transforms parking infrastructure into distributed,
                  always-on edge endpoints.
                </p>
              </div>
            </Item>
          </div>
        </Stagger>

        <div style={{ height: 36 }} />

        {/* Strategic Summary */}
        <FadeUp>
          <div className="panel" style={{ padding: 26, maxWidth: 1000 }}>
            <h3 style={{ fontWeight: 900, marginBottom: 12 }}>
              Strategic value summary
            </h3>
            <p className="p">
              ParkBlockX™ is not a point solution.
              <br /><br />
              It is a platform-level asset designed for acquisition or
              long-term licensing by organizations seeking to modernize
              parking infrastructure at scale.
              <br /><br />
              The system is software-complete, simulation-tested,
              patent-pending, and structured for rapid integration into
              existing product lines and service offerings.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
